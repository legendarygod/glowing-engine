import React from 'react'
import PropTypes from 'prop-types'
//styles
import { Wrapper, Photo } from './Actor.styles';

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Photo
            src={imageUrl}
            alt='actor-thumb'
        />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string
}

export default Actor;