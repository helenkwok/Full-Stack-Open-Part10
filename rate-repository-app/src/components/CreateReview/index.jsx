import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-native";
import CreateReviewForm from './CreateReviewForm';
import useCreateReview from '../../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
  .string()
  .required('Repository name is required'),
  rating: yup
  .number()
  .integer()
  .min(0, 'Rating between 0 and 100')
  .max(100, 'Rating between 0 and 100')
  .required('Rating is required'),
  text: yup
  .string(),
});

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) =>
        <CreateReviewForm onSubmit={handleSubmit} />
      }
    </Formik>
  );
}

const CreateReview = () => {
  const navigate = useNavigate();
  const [createreview] = useCreateReview();

  const onSubmit = async (values, {setSubmitting, resetForm}) => {
    const { ownerName, repositoryName, rating, text } = values;
    let repositoryId

    try {
      const response = await createreview({
        ownerName,
        repositoryName,
        rating: parseInt(rating),
        text
      });
      repositoryId = response.data.createReview.repositoryId;
    } catch (e) {
      console.log(e);
    };

    resetForm(initialValues);
    setSubmitting(false);
    navigate(`/repository/${repositoryId}`);
  };
  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;