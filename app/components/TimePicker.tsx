import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

interface Time {
  hours: number;
  minutes: number;
}

export function TimePicker({
  label,
  time,
  setTime,
}: {
  label: string;
  time: Time;
  setTime: React.Dispatch<React.SetStateAction<Time>>;
}) {
  const timeDate = new Date();
  const [showTimePicker, setShowTimePicker] = React.useState<boolean>(false);
  const [locale, _] = React.useState('en-GB');
  const timeFormatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        hour: 'numeric',
        minute: 'numeric',
      }),
    [locale],
  );
  time.hours !== undefined && timeDate.setHours(time.hours);
  time.minutes !== undefined && timeDate.setMinutes(time.minutes);
  const onConfirmFromTime = React.useCallback(
    ({ hours, minutes }: any) => {
      setShowTimePicker(false);
      setTime({ hours, minutes });
    },
    [setTime, setTime],
  );
  const onDismissTimePicker = React.useCallback(() => {
    setShowTimePicker(false);
  }, [setTime]);
  return (
    <View>
      <TextInput
        label={label}
        style={{ flex: 1 }}
        value={
          time && time.hours !== undefined && time.minutes !== undefined
            ? timeFormatter.format(timeDate)
            : 'No time selected.'
        }
        onFocus={() => setShowTimePicker(true)}
      />
      <TimePickerModal
        locale={locale}
        visible={showTimePicker}
        onDismiss={onDismissTimePicker}
        onConfirm={onConfirmFromTime}
        hours={time.hours}
        minutes={time.minutes}
      />
    </View>
  );
}
