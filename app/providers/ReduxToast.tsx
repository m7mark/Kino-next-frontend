import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

export const ReduxToast: FC = () => {
  return (
    <ReduxToastr
      newestOnTop={false}
      timeOut={4000}
      preventDuplicates
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  )
}
