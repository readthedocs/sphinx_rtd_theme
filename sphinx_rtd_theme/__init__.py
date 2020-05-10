"""
Sphinx Read the Docs theme.

From https://github.com/ryan-roemer/sphinx-bootstrap-theme.
"""

from os import path
import pkg_resources

from sphinx.locale import _

import sphinx

try:
    # Available from Sphinx 1.6
    from sphinx.util.logging import getLogger
except ImportError:
    from logging import getLogger


__version__ = '0.5.0rc2'
__version_full__ = __version__


logger = getLogger(__name__)

def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir


# See http://www.sphinx-doc.org/en/stable/theming.html#distribute-your-theme-as-a-python-package
def setup(app):
    if sphinx.version_info >= (1, 6, 0):
        # Register the theme that can be referenced without adding a theme path
        app.add_html_theme('sphinx_rtd_theme', path.abspath(path.dirname(__file__)))

    # Warn if a prerelease version of the theme is used

    parsed_version = pkg_resources.parse_version(__version__)
    if parsed_version.is_prerelease:
        logger.warning(_('You are using a pre-release version (%s) of sphinx-rtd-theme.'), __version__)
        logger.warning(_('Use a stable release if you encounter problems.'))
        logger.warning(_('See <https://sphinx-rtd-theme.readthedocs.io/en/stable/installing.html>.'))

    if sphinx.version_info >= (1, 8, 0):
        # Add Sphinx message catalog for newer versions of Sphinx
        # See http://www.sphinx-doc.org/en/master/extdev/appapi.html#sphinx.application.Sphinx.add_message_catalog
        rtd_locale_path = path.join(path.abspath(path.dirname(__file__)), 'locale')
        app.add_message_catalog('sphinx', rtd_locale_path)

    return {'parallel_read_safe': True, 'parallel_write_safe': True}
