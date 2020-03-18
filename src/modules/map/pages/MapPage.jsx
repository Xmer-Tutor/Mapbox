import React, { Fragment } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { icons } from '../layers'
import styles from './map.module.scss'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

class MapPage extends React.PureComponent {
    mapContainer = React.createRef()

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-86.5861, 34.7304],
            zoom: 11.15,
            maxZoom: 12
        })

        map.on('load', () => {
            icons(map, mapboxgl)
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