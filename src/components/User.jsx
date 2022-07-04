import React from 'react';

const User = () => {
	const users = [
		{
			fullname: 'harculas',
			age: 24,
			phones: [
				{
					home: '0123456',
					office: '0123456',
				},
			],
		},
	];
	console.log('🚀 ~ file: User.jsx ~ line 23 ~ User ~ users', users);
	return (
		<React.Fragment>
			{users.map((user, index) => {
				return (
					<React.Fragment key={index}>
						<h5>Name :{user.fullname}</h5>
						<h5>Age : {user.age}</h5>
						{user.phones.map((phone, index) => {
							return (
								<div key={index}>
									<p>home : {phone.home}</p>
									<p>office :{phone.office}</p>
								</div>
							);
						})}
					</React.Fragment>
				);
			})}
		</React.Fragment>
	);
};

export default User;
