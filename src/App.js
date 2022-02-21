import CakeContainer from './components/CakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import ItemsContainer from './components/ItemsContainer';
function App() {
	return (
		<Provider store={store}>
			<div className='container py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 offset-md-3'>
							<ItemsContainer cake />
							<ItemsContainer />
							<NewCakeContainer />
						</div>
					</div>
				</div>
			</div>
			<div className='container  mt-5 '>
				<div className='row'>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-body'>
								<h4 className=' card-title'> without hooks</h4>
								<CakeContainer />
								<IceCreamContainer />
							</div>
						</div>
					</div>
					<div className='col-md-6'>
						<div className='card'>
							<div className='card-body'>
								<h4 className=' card-title'> with hooks</h4>
								<HookCakeContainer />
								<HookIceCreamContainer />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Provider>
	);
}

export default App;
