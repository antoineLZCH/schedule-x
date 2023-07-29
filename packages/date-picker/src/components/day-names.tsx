import { useContext } from 'preact/compat'
import { AppContext } from '../utils/stateful/app-context'
import { getOneLetterDayNames } from '../../../../shared/utils/stateless/time/date-time-localization/date-time-localization'
import { toJSDate } from '../../../../shared/utils/stateless/time/format-conversion/format-conversion'

export default function DayNames() {
  const $app = useContext(AppContext)
  const aWeek = $app.timeUnitsImpl.getWeekFor(
    toJSDate($app.datePickerState.selectedDate.value)
  )
  const dayNames = getOneLetterDayNames(aWeek, $app.config.locale)

  return (
    <div class="sx__date-picker__day-names">
      {dayNames.map((dayName) => (
        <span data-testid="day-name" class="sx__date-picker__day-name">
          {dayName}
        </span>
      ))}
    </div>
  )
}