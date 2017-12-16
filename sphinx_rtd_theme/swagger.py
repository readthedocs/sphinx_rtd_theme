# -*- coding: utf-8 -*-
# ONLY RTD configuration

import sphinx
from docutils import nodes
from docutils.parsers.rst import Directive
from sphinx.util import logging

if False:
    # For type annotation
    from typing import Any, Dict, List  # NOQA
    from sphinx.application import Sphinx  # NOQA

logger = logging.getLogger(__name__)


class swagger_node(nodes.General, nodes.Element):
    pass


class SwaggerView(Directive):
    """
    A list of all todo entries.
    """

    has_content = False
    required_arguments = 0
    optional_arguments = 0
    final_argument_whitespace = False
    option_spec = {}  # type: Dict

    def run(self):
        # type: () -> List[todolist]
        # Simply insert an empty todolist node which will be replaced later
        # when process_todo_nodes is called
        return [swagger_node('')]


def process_swagger_nodes(app, doctree, fromdocname):
    # type: (Sphinx, nodes.Node, unicode) -> None
    if not app.config['swagger_json']:
        for node in doctree.traverse(swagger_node):
            node.parent.remove(node)

    # Replace all todolist nodes with a list of the collected todos.
    # Augment each todo with a backlink to the original location.
    env = app.builder.env

    if not hasattr(env, 'todo_all_todos'):
        env.todo_all_todos = []  # type: ignore

    for node in doctree.traverse(swagger_node):
        if not app.config['swagger_json']:
            node.replace_self([])
            continue
        continue


def visit_swagger_node(self, node):
    # type: (nodes.NodeVisitor, swagger_node) -> None
    swagger_script = u'''<div id="swagger-ui"></div>
<script>
window.onload = function() {
  const ui = SwaggerUIBundle({
    spec: %(swagger_json)s,
    dom_id: '#swagger-ui',
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    layout: "StandaloneLayout"
  })

  window.ui = ui
}
</script>''' % {'swagger_json': self.builder.app.config.swagger_json}
    self.body.append(swagger_script)
    raise nodes.SkipNode


def setup(app):
    # type: (Sphinx) -> Dict[unicode, Any]
    app.add_config_value('swagger_json', '', 'html')

    app.add_node(swagger_node, html=(visit_swagger_node, None))

    app.add_directive('swaggerview', SwaggerView)
    app.connect('doctree-resolved', process_swagger_nodes)
    return {'version': sphinx.__display_version__, 'parallel_read_safe': True}
