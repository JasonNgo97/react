import React from 'react';
import { ComponentStory, ComponentMeta, addDecorator, storiesOf } from '@storybook/react';
import { HomePage } from 'app/pages/HomePage';
import { BrowserRouter, Routes } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { createMemoryHistory } from 'history'

// const Template: ComponentStory<typeof HomePage> = args => (
//   <HomePage {...args} />
// );

storiesOf('HomePage', module)
  .addDecorator(story => (
    <Router history={createMemoryHistory({ initialEntries: ['/'] })}>
      <Routes>
        <Route path="/" component={() => story()} />

      </Routes>
    </Router>
  ))
  .add('Default', () => <HomePage />);
