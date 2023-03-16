import React, { useEffect } from 'react';
import { useField } from '@unform/core';
import { useRef } from 'react'
import styled from "styled-components";

const Input = (props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(props.name);

  useEffect(() => {
    registerField({
        name: fieldName,
        ref: inputRef,
        getValue: (ref) => {
          return ref.current.value
        },
        setValue: (ref, value) => {
          ref.current.value = value
        },
        clearValue: (ref) => {
          ref.current.value = ''
        },
    })
  }, [fieldName, registerField]);

  return (
    <div>
      <Entrada 
        type={props.type}
        ref={inputRef} 
        defaultValue={defaultValue}/>

        {error && <span style={{ color: '#f00' }}>{error}</span>}
    </div>
  );
}

export { Input }

const Entrada = styled.input `
    width: 385px;
    height: 50px;
    border: 1px solid #CACCCF;
    border-radius: 100px;
    padding-left: 60px;
    margin-bottom: 20px;
`