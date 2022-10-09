import Footer from './Footer'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../utils/context'

describe('Footer', () => {
  test('Should render without crashing', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })
})
