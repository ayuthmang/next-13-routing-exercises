import ScreenSaver from '../../../../components/ScreenSaver'

export default function ScreenSaverExercise({ params }) {
  const { color } = params

  return (
    <>
      <main className="screen-saver-wrapper">
        <ScreenSaver color={color} />
      </main>
    </>
  )
}
