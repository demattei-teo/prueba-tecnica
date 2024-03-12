import Title from '@/components/atoms/Title'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('Title', () => {
  it('should render a heading', () => {
    render(<Title headingLevel='h6' children='test' className='test' />)
    expect(screen.getByRole('heading'))
  })
})
