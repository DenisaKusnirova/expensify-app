import React from 'react'

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  }

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description: description }))
  }

  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note: note }))
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm
