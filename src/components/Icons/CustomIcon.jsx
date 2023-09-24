import { useEffect, useRef } from 'react';

function CustomIcon ({ path, classes = '' }) {
	const ImportedIconRef = useRef(null);

	useEffect(() => {
		const importIcon = async () => {
			try {
				fetch(path)
					.then(res => res.text())
					.then(res => {
						if (ImportedIconRef.current) {
							ImportedIconRef.current.innerHTML = res;
						}
					});

			} catch (e) {
				console.log(e);
			}
		};
		importIcon();
	}, [path]);

	return <div className={classes} ref={ImportedIconRef}></div>;
}

export default CustomIcon;