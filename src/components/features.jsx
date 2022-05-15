import { FaComments } from 'react-icons/fa';
import { BsPersonBoundingBox, BsFillPencilFill } from 'react-icons/bs';

const styleIcon = {
	fontSize: '38px',
	marginBottom: '20px',
	transition: 'all 0.5s',
	color: '#fff',
	width: '100px',
	height: '100px',
	padding: '30px 0',
	borderRadius: '50%',
	background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
	boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
};

export const Features = props => (
	<div id="features" className="text-center">
		<div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
			<div className="col-md-10 col-md-offset-1 section-title">
				<h2>Features</h2>
			</div>
			<div className="row">
				{props.data ? (
					<div className="col-xs-12 col-md-4">
						<FaComments style={styleIcon} />
						<h3>{props.data[0].title}</h3>
						<p>{props.data[0].text}</p>
					</div>
				) : null}
				{props.data ? (
					<div className="col-xs-12 col-md-4">
						<BsPersonBoundingBox style={styleIcon} />
						<h3>{props.data[1].title}</h3>
						<p>{props.data[1].text}</p>
					</div>
				) : null}

				{props.data ? (
					<div className="col-xs-12 col-md-4">
						<BsFillPencilFill style={styleIcon} />
						<h3>{props.data[2].title}</h3>
						<p>{props.data[2].text}</p>
					</div>
				) : null}
			</div>
		</div>
	</div>
);
