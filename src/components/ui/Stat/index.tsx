import React, { FC } from 'react'
import Skeleton from '../Skeleton'
import Card from '../Card'
import { formatBalance, formatPercent } from '../../../functions'
import { BigNumberish } from 'ethers'
import Typography from '../Typography'
import { commify } from 'ethers/lib/utils'

type Stat = {
  name?: string
  stat?: string | number | BigNumberish
  before?: string | JSX.Element
  after?: string | JSX.Element
  isBalance?: boolean
  isPercent?: boolean
}
export interface StatProps {
  title?: string
  maxCols?: number
  stats?: Stat[]
}
const Stat: FC<StatProps> = ({ title, stats, maxCols }) => {
  return (
    <div>
      <Typography as="h3" className="text-lg font-medium leading-6 ">
        {title}
      </Typography>

      <dl className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 ">
        {stats &&
          stats.map((item, i) => (
            <Card key={i}>
              <dt className="truncate text-sm font-medium text-secondary">
                {item?.name && item.name}
              </dt>
              <dd className="mt-1 flex items-center text-2xl font-semibold text-primary">
                {item.stat ? (
                  <>
                    {item.before}

                    {item.isBalance
                      ? commify(formatBalance(item.stat))
                      : item.isPercent
                      ? formatPercent(item.stat)
                      : item.stat}

                    {item.after}
                  </>
                ) : (
                  <Skeleton />
                )}
              </dd>
            </Card>
          ))}
      </dl>
    </div>
  )
}

export default Stat
