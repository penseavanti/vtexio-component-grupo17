import React from 'react';
// import * as Speech from 'react-speech';
import useProduct from 'vtex.product-context/useProduct'
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = ['audio']

const Audio: StorefrontFunctionComponent = () => {

  const handles = useCssHandles(CSS_HANDLES)

  const { product } = useProduct()

  console.log(product)

  return (
    <div className={`${handles.audio}`}>
      {/* <Speech text="Welcome to react speech" />,
      document.getElementById('node') */}
    </div>
  )
}

Audio.schema = {
  title: 'editor.Audio.title',
  description: 'editor.Audio.description',
  type: 'object',
  properties: {
    title: {
      title: 'I am a title',
      type: 'string',
      default: null,
    }
  },
}

export default Audio