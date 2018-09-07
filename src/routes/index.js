import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Week1 from '../pages/week1'
import Week3 from '../pages/week3'
import Week41 from '../pages/week41'
import Week42 from '../pages/week42'

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/assignment1" component={Week1} />
        <Route exact path="/assignment2" component={Week3} />
        <Route exact path="/assignment3-1" component={Week41} />
        <Route exact path="/assignment3-2" component={Week42} />
    </Switch>
)