import React, { Fragment } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import styles from './map.module.scss'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

class MapPage extends React.PureComponent {
    mapContainer = React.createRef()

    componentDidMount() {
        new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11'
        })
    }

    render() { 
        return (
            <Fragment>
                <div
                    ref={this.mapContainer}
                    className={styles.map}
                />
            </Fragment>
        )
    }
}

export default MapPage