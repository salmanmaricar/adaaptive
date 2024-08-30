import { expect, it, describe, beforeAll } from 'vitest'
import {render, screen, waitFor} from '@testing-library/react'
import Page from "../page"
 
describe('Page', () => {
    beforeAll(() => {
        render(<Page />)
    })
    
    it("should test the heading banner", ()=>{
        expect(screen.queryByText("Training")).toBeTruthy()
    })

    it('should test for an event title', () => { 
        expect(screen.queryByText("Using Systems Thinking")).toBeTruthy()
    })

    it('should test for an event date', () => { 
        expect(screen.queryByText("13 Jun 2024")).toBeTruthy()
    })

    it('should test for an event photo', () => { 
        expect(screen.getByRole('img')).toBeTruthy()
    })

    it('should test for a google form', () => {
        expect(screen.getByTitle('google-form')).toBeTruthy()
    })
})