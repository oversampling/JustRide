import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

export default function DatePicker({
  label,
  dates,
  setDates,
}: {
  label: string;
  dates: Date[];
  setDates: React.Dispatch<React.SetStateAction<Date[]>>;
}) {
  const [locale, _] = React.useState('en-GB');
  const dateFormatter = React.useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [locale],
  );
  const [showDatesPicker, setShowDatesPicker] = React.useState<boolean>(false);
  const onDismiss = React.useCallback(() => {
    setShowDatesPicker(false);
  }, [setShowDatesPicker]);
  const onConfirm = React.useCallback((params: { dates: Date[] }) => {
    setShowDatesPicker(false);
    setDates(params.dates);
  }, []);
  return (
    <View>
      <TextInput
        label={label}
        value={
          dates
            ?.map((d) => dateFormatter.format(d))
            .filter(Boolean)
            .join(', ') || 'No dates selected.'
        }
        onFocus={() => setShowDatesPicker(true)}
      />
      <DatePickerModal
        locale={locale}
        mode="multiple"
        visible={showDatesPicker}
        onDismiss={onDismiss}
        dates={dates}
        validRange={{ startDate: new Date() }}
        onConfirm={onConfirm}
      />
    </View>
  );
}
