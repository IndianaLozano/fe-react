import { FunctionComponent } from 'react'
import { Page, PageHeader } from '../../shared'

export interface CreateUserProps {
  onGoBack: () => void
}

export const CreateUser: FunctionComponent<CreateUserProps> = ({
  onGoBack,
}) => {
  return (
    <Page>
      <PageHeader
        title="Nuevo usuario"
        buttonLabel="Volver"
        onButtonClick={onGoBack}
      />
    </Page>
  )
}
