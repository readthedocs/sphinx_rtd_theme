# Require any additional compass plugins here.

# Set this to the root of your project when deployed:

#path = File.dirname(__FILE__)

project_path = "sphinx_rtd_theme/static"
http_path = "static"
sass_path = "sass"

css_dir = "css"
javascripts_dir = "js"
images_dir = "img"
fonts_dir = "font"

# To enable relative paths to assets via compass helper functions. Uncomment:
#relative_assets = true
add_import_path "../../bower_components/bourbon/app/assets/stylesheets"
add_import_path "../../bower_components/neat/app/assets/stylesheets"
add_import_path "../../bower_components/wyrm/sass"
add_import_path "../../bower_components/font-awesome/scss"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false
line_comments = (environment == :production) ? false : true


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
preferred_syntax = :sass
