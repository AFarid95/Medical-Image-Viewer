import {
    RenderingEngine,
    init
} from '@cornerstonejs/core';
import * as cornerstone from '@cornerstonejs/core';
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import dicomParser from 'dicom-parser';

const { preferSizeOverAccuracy, useNorm16Texture } =
    cornerstone.getConfiguration().rendering;

cornerstoneDICOMImageLoader.external.cornerstone = cornerstone;
cornerstoneDICOMImageLoader.external.dicomParser = dicomParser;

cornerstoneDICOMImageLoader.configure({
    useWebWorkers: true,
    decodeConfig: {
        convertFloatPixelDataToInt: false,
        use16BitDataType: preferSizeOverAccuracy || useNorm16Texture,
    },
});

cornerstoneDICOMImageLoader.webWorkerManager.initialize({
    maxWebWorkers: navigator.hardwareConcurrency || 1,
    startWebWorkersOnDemand: false,
    taskConfiguration: {
        decodeTask: {
            initializeCodecsOnStartup: false,
            strict: false,
        },
    }
});

await init()

const renderingEngine = new RenderingEngine("myRenderingEngine")

export {renderingEngine}