import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Collapse from '@material-ui/core/Collapse'
import { withStyles } from '@material-ui/core/styles'
import Warning from '@material-ui/icons/Warning'

import { onLogin } from '../actions/auth'
import styles from '../styles/styles'

class Login extends Component {
  state = {
    login: '',
    password: ''
  }

  componentDidMount () {
    const { onLogin } = this.props
    const storage = window.localStorage
    const storedLogin = storage.getItem('login')
    const storedPassword = storage.getItem('password')

    if (storedLogin != null && storedPassword != null) {
      onLogin(storedLogin, storedPassword)
    }
  }

  render () {
    const { classes, error } = this.props
    const { login, password } = this.state

    return (
      <div className={classes.loginContainer}>
        <Card>
          <CardContent>
            <Typography
              variant='title'
              align='center'
            >
              SG-TEST 2: Electric Boogaloo
            </Typography>
            <TextField
              classes={{
                root: classes.textField
              }}
              fullWidth
              value={login}
              onChange={this.onLoginChange}
              label='Login'
            />
            <TextField
              classes={{
                root: classes.textField
              }}
              fullWidth
              value={password}
              onChange={this.onPasswordChange}
              label='Password'
            />
            <Collapse in={error !== null}>
              <Card>
                <CardContent
                  classes={{
                    root: classes.errorContainer
                  }}
                >
                  <div className={classes.error}>
                    <Warning />
                    <Typography>
                      {error}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Collapse>
          </CardContent>
          <CardActions
            classes={{
              root: classes.actions
            }}
          >
            <Button
              variant='raised'
              color='primary'
              onClick={this.onSubmit}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  onLoginChange = e => {
    const login = e.target.value
    this.setState(() => ({ login }))
  }

  onPasswordChange = e => {
    const password = e.target.value
    this.setState(() => ({ password }))
  }

  onSubmit = e => {
    const { onLogin } = this.props
    const { login, password } = this.state

    e.preventDefault()

    onLogin(login, password)
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
  onLogin: (login, password) => dispatch(onLogin(login, password))
})

const LoginPage = withStyles(styles)(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
