import React, { Component } from 'react';

export default class Forms extends Component {
	state = {
		title: '',
		textArea: '',
		library: '',
	};
	handelChange = (e) => {
		// this.setState({
		// 	title: e.target.value,
		// });

		if (e.target.type === 'text') {
			console.log(e.target.type);
			this.setState({
				title: e.target.value,
			});
		} else if (e.target.type === 'textarea') {
			this.setState({
				textArea: e.target.value,
			});
		} else if (e.target.type === 'select-one') {
			this.setState({
				library: e.target.value,
			});
		} else {
			console.log(e.target.type);
		}
	};

	submitHandler = (e) => {
		const { title, textArea, library } = this.state;
		e.preventDefault();
		console.log(title, textArea, library);
	};

	render() {
		const { title, textArea, library } = this.state;
		return (
			<React.Fragment>
				<h1 className=' text-capitalize '>Form Component</h1>
				<hr />
				<div className='container'>
					<div className='row'>
						<div className='col-8 offset-2'>
							<div className='card'>
								<div className='card-body'>
									<form className='form' onSubmit={this.submitHandler}>
										<label
											htmlFor='textInput'
											className='form-label text-capitalize'
										>
											text input
										</label>
										<input
											type='text'
											className='form-control'
											id='textInput'
											value={title}
											onChange={this.handelChange}
											placeholder='Enter title'
										></input>

										<label htmlFor='inputTextArea' className='form-label'>
											Example textarea
										</label>
										<textarea
											type='textarea'
											className='form-control'
											id='inputTextArea'
											rows='3'
											placeholder='Message'
											value={textArea}
											onChange={this.handelChange}
										></textarea>

										<select
											value={library}
											onChange={this.handelChange}
											className='form-select form-select-sm mt-2'
										>
											<option value='select-menu'>select menu</option>
											<option value='One'>One</option>
											<option value='Two'>Two</option>
											<option value='Three'>Three</option>
										</select>

										<button
											className='btn btn-primary mx-auto w-100  mt-3'
											type='submit'
										>
											Button
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
