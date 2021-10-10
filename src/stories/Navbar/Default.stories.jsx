import React from 'react';
import Navbar from '../../common/components/Navbar';

export default {
  title: 'Components/Navbar/Default',
  component: Navbar,
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
    },
  },
  }
};

const Component = (args) => {
  return <Navbar {...args} width={`${args.width}%`}  />
};

export const Default = Component.bind({});
Default.args = {
  width: 100,
  menuList: [
    {
      title: 'About us',
      link: '/',
    },
    {
      title: 'Practice',
      link: '/',
      // icon: 'home',
    },
    {
      title: 'Build',
      link: '/',
      // icon: 'home',
    },
    {
      title: 'Coding Bootcamp',
      link: '/',
      // icon: 'home',
    },
  ],
};