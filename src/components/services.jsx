import { MdHomeRepairService, MdComputer } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';
const styleIcon = {
	fontSize: '42px',
	width: '120px',
	height: '120px',
	padding: '40px 0',
	background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
	borderRadius: '50%',
	color: '#fff',
	boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
};
export const Services = props => (
	<div id="services" className="text-center">
		<div className="container">
			<div className="section-title">
				<h2>My Services</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit duis
					sed dapibus leonec.
				</p>
			</div>
			<div className="row">
				{props.data ? (
					<div className="col-md-4">
						<div className="service-desc">
							<MdHomeRepairService style={styleIcon} />
							<h3>{props.data[0].name}</h3>
							<p>{props.data[0].text}</p>
						</div>
					</div>
				) : null}
				{props.data ? (
					<div className="col-md-4">
						<div className="service-desc">
							<CgWebsite style={styleIcon} />
							<h3>{props.data[1].name}</h3>
							<p>{props.data[1].text}</p>
						</div>
					</div>
				) : null}

				{props.data ? (
					<div className="col-md-4">
						<div className="service-desc">
							<MdComputer style={styleIcon} />
							<h3>{props.data[2].name}</h3>
							<p>{props.data[2].text}</p>
						</div>
					</div>
				) : null}
			</div>
		</div>
	</div>
);
