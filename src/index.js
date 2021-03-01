import React, { Component } from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class CounterContainer {
    @observable count = 0;
}

const store = new CounterContainer();

const Counter = observer(() => (
    <div>
        <button
            onClick={() => store.count--}>
            -
    </button>
        { store.count}
        <button
            onClick={() => store.count++}>
            +
    </button>
    </div>
))

const App = () => (
    <Counter />
);

render(<App />, document.getElementById('root'));
