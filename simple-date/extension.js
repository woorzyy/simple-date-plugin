const vscode = require('vscode')

function activate(context) {
	console.log('Simple Date extension activated!')

	let disposable = vscode.commands.registerCommand(
		'simple-date.insertDate',
		function () {
			const editor = vscode.window.activeTextEditor
			if (editor) {
				const date = new Date()
				const day = date.getDate().toString().padStart(2, '0')
				const month = (date.getMonth() + 1).toString().padStart(2, '0')
				const year = date.getFullYear()
				const dateString = `${day}.${month}.${year}`

				editor.edit(editBuilder => {
					editBuilder.insert(editor.selection.active, dateString)
				})
			}
		}
	)

	context.subscriptions.push(disposable)
}

function deactivate() {}

module.exports = {
	activate,
	deactivate,
}
