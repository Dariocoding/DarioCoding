import { Image } from './image';

export const Gallery = props => (
	<div id="portfolio" className="text-center">
		<div className="container">
			<div className="section-title">
				<h2>Portfolio</h2>
				<p>Algunas imágenes de mis trabajos hechos</p>
			</div>
			<div className="row display-flex">
				{props.data
					? props.data.map((d, i) => (
							<div
								key={`${d.title}-${i}`}
								className="col-sm-6 col-md-4 col-lg-4"
							>
								<Image
									title={d.title}
									largeImage={d.largeImage}
									smallImage={d.smallImage}
								/>
							</div>
					  ))
					: 'Loading...'}
			</div>
		</div>
	</div>
);
