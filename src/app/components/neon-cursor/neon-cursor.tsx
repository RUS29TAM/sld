'use client'
import React from 'react';
import styles from './neone-cursor.module.css'
// @ts-ignore
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const NeonCursor = () => {

    neonCursor({
        el: document.getElementById('app'),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025
    })
    return (
        <div className={styles.app} id="app">
            <div id="hero">
                <h1 className={styles.h1}>NEON<br/>CURSOR</h1>
                <a className={styles.a} target="_blank" href="https://example.com">@RUS29TAM</a>
            </div>
        </div>
    );
};

export default NeonCursor;
