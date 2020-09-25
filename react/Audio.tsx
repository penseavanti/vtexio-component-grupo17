import React from 'react';
import Speech from 'react-speech';
import styled from 'styled-components'

//vtex setup --typings
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = ['audio']

const Audio: StorefrontFunctionComponent = () => {

  const handles = useCssHandles(CSS_HANDLES)

  const { product } = useProduct() || { }

  // if(!product) return null

  return (
    <div className={`${handles.audio}`}>
      {
        product?.description && <Speech text={product.description} />
      }
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