import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };

  // Handle OPTIONS request for CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const pathname = url.pathname.replace("/functions/v1/make-server", "");

    // Connect to Amadeus
    const authResponse = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: Deno.env.get("AMADEUS_CLIENT_ID") || "",
        client_secret: Deno.env.get("AMADEUS_CLIENT_SECRET") || "",
      }),
    });

    const authData = await authResponse.json();
    const token = authData.access_token;

    const amadeusResponse = await fetch(`https://test.api.amadeus.com${pathname}${url.search}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await amadeusResponse.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
