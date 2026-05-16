import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const fontPath = path.join(process.cwd(), '/app/fonts/SourceCodePro-Regular.ttf')
  const fontData = fs.readFileSync(fontPath)
  return new ImageResponse(
    (
      <div
        style={{
          background: '#00000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontSize: 27,
          fontFamily: 'SourceCodePro',
          paddingBottom: '2px',
        }}
      >
        W
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'SourceCodePro',
          data: fontData,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
