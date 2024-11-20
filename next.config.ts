import withPayload from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

export default withPayload({
	// logging: {
	//   fetches: {
	//     fullUrl: true
	//   }
	// }
}) satisfies NextConfig
