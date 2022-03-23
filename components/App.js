import React, { useState } from 'react';
import {
  ViroARScene,
  Viro3DObject,
  ViroConstants,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
  ViroAmbientLight
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
    } else if (state === ViroConstants.TRACKING_NONE) {
      console.log('tracking lost...')
    }
  }

  ViroARTrackingTargets.createTargets({
    "targetOne": {
      source: require('../assets/qr.png'),
      physicalWidth: 1,
      orientation: 'Up'
    },
  });

  ViroMaterials.createMaterials({
    heart: {
      lightingModel: "Blinn",
      // diffuseTexture: require('./res/Heart_D3.jpg'),
      // specularTexture: require('./res/Heart_S2.jpg'),
    },
  });


  const found = () => {
    console.log('found')
  }

  return (

    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroARImageMarker target="targetOne" onAnchorFound={found}>
        <ViroAmbientLight color="#FF0000" />
        <Viro3DObject
          scale={[0.01, 0.01, 0.01]}
          texture
          source={require('./res/test/test.obj')}
          resources={[require('./res/test/test.mtl')]}
          type="OBJ"
          materials={["heart"]}
        />
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default () => {

  return (


    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
    />
  );
};