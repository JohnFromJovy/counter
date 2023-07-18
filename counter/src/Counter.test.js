import Counter from './Counter';
import { fireEvent, render } from '@testing-library/react';

describe(Counter, () => {
	it('counter display correct initial number', () => {
		const { getByTestId } = render(<Counter initialCount={0} />);
		const countValue = Number(getByTestId('count').textContent);
		expect(countValue).toEqual(0);
	});

	it('counter incresed by 1 when incresment button clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		const incrementButtn = getByRole('button', { name: 'Increment' });
		const countValue1 = Number(getByTestId('count').textContent);
		fireEvent.click(incrementButtn);
		const countValue2 = Number(getByTestId('count').textContent);
		expect(countValue1).toEqual(0);
		expect(countValue2).toEqual(1);
	});

	it('counter decresed by 1 when decrement button clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
		const decrementButtn = getByRole('button', { name: 'Decrement' });
		const countValue1 = Number(getByTestId('count').textContent);
		fireEvent.click(decrementButtn);
		const countValue2 = Number(getByTestId('count').textContent);
		expect(countValue1).toEqual(0);
		expect(countValue2).toEqual(-1);
	});

	it('counter reset to 0 when reset button clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={28} />);
		const resetButtn = getByRole('button', { name: 'Reset' });
		const countValue1 = Number(getByTestId('count').textContent);
		fireEvent.click(resetButtn);
		const countValue2 = Number(getByTestId('count').textContent);
		expect(countValue1).toEqual(28);
		expect(countValue2).toEqual(0);
	});

	it('counter number sign change when incresment button clicked', () => {
		const { getByTestId, getByRole } = render(<Counter initialCount={99} />);
		const switchSignButtn = getByRole('button', { name: 'Switch Sign' });
		const countValue1 = Number(getByTestId('count').textContent);
		fireEvent.click(switchSignButtn);
		const countValue2 = Number(getByTestId('count').textContent);
		expect(countValue1).toEqual(99);
		expect(countValue2).toEqual(-99);
	});
});
