require "crustache"
require "json"
require "markd"
require "beautify"
require "http/client"
require "option_parser"

class Model
  JSON.mapping(
    headline: String,
    devider: String,
    tags: Array(Hash(String, String))?,
    article: String?,
    mirrors: Array(Hash(String, String))?,
    cards: Array(Hash(String, String | Array(Hash(String, String))))?,
    contact: Array(Hash(String, String))?,
    donate: Array(Hash(String, String))?
  )
end

token = ""

OptionParser.parse do |parser|
	parser.banner = "Usage: crustache [arguments]"
	parser.on("-t", "--token=TOKEN", "Upcases the salute") {|t| token = t }
	parser.on("-h", "--help", "Show this help") do
	  puts parser
	  exit
	end
	parser.missing_option do |flag|
		STDERR.puts "ERROR: #{flag} is missing."
		STDERR.puts parser
		exit(1)
	  end
	parser.invalid_option do |flag|
	  STDERR.puts "ERROR: #{flag} is not a valid option."
	  STDERR.puts parser
	  exit(1)
	end
  end

if token == ""
	STDERR.puts "ERROR: token is missing."
	exit(1) 
end

puts "Script started"
template = Crustache.parse File.read("template.mst")
Dir.glob("*.json").each do |file|
  puts "Compiling " + file
  json = File.read(file)
  hash = Hash(String, String | Array(Hash(String, String)) | Array(Hash(String, String | Array(Hash(String, String)))) | Nil).from_json(Model.from_json(json).to_json)
  if hash.has_key?("article")
    article = File.read(hash["article"].to_s)
    html = "<div id=\"article\">"
    html += Markd.to_html(article)
    html += "</div>"
    hash["converted_article"] = html
  end
  if hash.has_key?("mirrors")
    mirrors = hash["mirrors"]
    if mirrors.is_a?(Array) && mirrors.not_nil!.size > 0
      hash["hasMirrors"] = "true"
    end
  end
  if hash.has_key?("contact")
    contacts = hash["contact"]
    if contacts.is_a?(Array) && contacts.not_nil!.size > 0
      hash["hasContacts"] = "true"
    end
  end
  if hash.has_key?("donate")
    donate = hash["donate"]
    if donate.is_a?(Array) && donate.not_nil!.size > 0
      hash["hasDonate"] = "true"
    end
  end
  if hash.has_key?("cards")
    cards = hash["cards"]
    if cards.is_a?(Array) && cards.not_nil!.size > 0
      hash["hasCards"] = "true"
      cards.each_index do |item|
        if cards[item].has_key?("link") && !cards[item].has_key?("github") && cards[item]["link"].to_s.starts_with?("https://github.com/")
          arr = cards[item]["link"].to_s.split("/").reverse.reject { |c| c.try &.empty? || c == " " || c.nil? }
          owner = arr[1]
          repo = arr[0]
          headers = HTTP::Headers{
            "Authorization" => "token " + token,
            "Content-Type":    "application/json",
          }
          response = HTTP::Client.get "https://api.github.com/repos/#{owner}/#{repo}", headers: headers
          if response.status_code == 200
            value = JSON.parse(response.body).as_h
            cards[item]["github"] = "true"
            cards[item]["gh_topic"] = cards[item].has_key?("topic") ? cards[item]["topic"].to_s : "GITHUB"
            cards[item]["gh_image"] = cards[item].has_key?("image") ? cards[item]["image"].to_s : "https://i.imgur.com/zho6zWC.png"
            cards[item]["gh_name"] = value["full_name"].to_s
            cards[item]["gh_url"] = value["html_url"].to_s
            cards[item]["gh_description"] = value["description"].to_s
			cards[item]["gh_stars"] = value["stargazers_count"].to_s
		  else
			puts "[ERROR] GitHub returned " + response.status_code.to_s
			exit(1);
          end
        elsif cards[item].has_key?("github")
          cards[item].delete("github")
        end
      end
    end
  end
  rendered_html = Crustache.render template, hash
  finished_html = Beautify.html(rendered_html)
  File.write("../pages/" + file.split(".")[0].downcase + ".html", finished_html)
  puts "Finished " + file
end
puts "Done"
