"""Sphinx ReadTheDocs theme.

From https://github.com/ryan-roemer/sphinx-bootstrap-theme.

"""
from os import path
import sphinx

__version__ = '0.4.2'
__version_full__ = __version__


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir

# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    app.add_html_theme('sphinx_rtd_theme', path.abspath(path.dirname(__file__)))

    # for sphinx-1.8 or later
    if sphinx.version_info[0:3] >= (1,8,0):

        rtd_locale_path = path.join(path.abspath(path.dirname(__file__)), 'locale')

        # See http://www.sphinx-doc.org/en/master/extdev/appapi.html#sphinx.application.Sphinx.add_message_catalog
        app.add_message_catalog('sphinx', rtd_locale_path)
