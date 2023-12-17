import { createError } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default eventHandler(async (event) => {
	const config = useRuntimeConfig()
	const supabase = createClient(config.public.supabase.url, config.private.supabase.SUPABASE_SERVICE_KEY)
	const body = await readBody(event)
	const { data, error } = await supabase.auth.admin.deleteUser(body.userId)

	if (error) {
		throw createError({ statusMessage: error.message })
	}

	return data
})
