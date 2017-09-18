"""Sphinx ReadTheDocs theme.

From https://github.com/ryan-roemer/sphinx-bootstrap-theme.

"""
import os

__version__ = '0.2.5b1'
__version_full__ = __version__


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = os.path.abspath(os.path.dirname(os.path.dirname(__file__)))
    return cur_dir

def setup(app):
    app.add_html_theme('sphinx_rtd_theme', path.abspath(path.dirname(__file__)))
