import React from 'react';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';

const Apply = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 35,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 60,
  width: 200,
  padding: '0 30px',
  letterSpacing: 2,
});

export default function StyledComponents() {
  return <Apply>Apply</Apply>;
}
