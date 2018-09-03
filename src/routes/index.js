import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Week1 from '../pages/week1'
import Week3 from '../pages/week3'
import Week4 from '../pages/week4'

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/assignment1" component={Week1} />
        <Route exact path="/assignment2" component={Week3} />
        <Route exact path="/assignment3" component={Week4} />
    </Switch>
)