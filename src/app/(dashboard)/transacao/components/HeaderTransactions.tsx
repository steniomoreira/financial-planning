import { HeaderCardValue } from '.'

export function HeaderTransactions() {
  return (
    <div className="mb-3 grid grid-cols-3 gap-3">
      <HeaderCardValue label="R" isIncome text="Receita" value="R$ 10000.00" />
      <HeaderCardValue label="D" text="Despesa" value="R$ 20000.00" />
      <HeaderCardValue isIncome text="Total" value="R$ 50000.00" />
    </div>
  )
}
