### SG-ASSESSMENT 2

A couple of things I thought that I should mention:

- Material UI has ugly imports, unfortunately. I wish I could have used `import {...} from '@material-ui/core'`, but the size of the bundle would increase dramatically so I thought that I should stick to the recommended practice
- One thing that I wished I had time to do is using Storybook. Developing components in isolation is a bliss. Also I wish I had time to implement tests.
- One thing that I could have done better is making an Invoice a separate component. That way I could optimize a little bit getting rid of arrow functions in render method.