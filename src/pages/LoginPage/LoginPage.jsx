import { useFormik } from 'formik';
import { object, string } from 'yup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {
  Layout,
  BigColumn,
  SmallColumn,
  FormContainer,
  StyledBtn,
  Label,
  Input,
} from './LoginPage.styled';

const LoginPage = () => {
  const LoginSchema = object().shape({
    email: string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: 'Invalid email',
        excludeEmptyString: true,
      })
      .required('Required'),
    password: string()
      .min(5, 'The password is too short!')
      .max(15, 'The password is too long!')
      .required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <Container fluid>
      <Layout>
        <BigColumn xs={7}></BigColumn>
        <SmallColumn>
          <FormContainer onSubmit={formik.handleSubmit}>
            <Label>
              Email address
              <Input
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
                isValid={formik.touched.email}
                isInvalid={formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Label>

            <Label>
              Password
              <Input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                isValid={formik.touched.password}
                isInvalid={formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Label>
            <StyledBtn variant="dark" type="submit">
              Log In
            </StyledBtn>
          </FormContainer>
        </SmallColumn>
      </Layout>
    </Container>
  );
};

export default LoginPage;
