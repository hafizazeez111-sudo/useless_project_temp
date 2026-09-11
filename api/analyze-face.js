export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY environment variable not configured on Vercel.' });
  }

  try {
    const { base64Data, playerName } = req.body || {};
    if (!base64Data) {
      return res.status(400).json({ error: 'Missing base64Data image' });
    }

    const promptText = `You are the hilarious retro 8-bit game master of 'Who Is More Useless?' for a Kerala/Manglish audience.
Analyze this face image of ${playerName || 'Player'} and generate a funny personalized roast AND customized multiple-choice quiz questions tailored to their facial expression and vibe.

Respond ONLY with valid JSON (strictly no markdown formatting or code block backticks) with this structure:
{
  "uselessScore": integer between 60 and 99,
  "faceRoast": "short 2-sentence funny Manglish roast about their facial expression",
  "uselessTitle": "3-5 word retro title in uppercase",
  "questions": [
    {
      "level": "FACE VIBE ZONE 1",
      "title": "📱 Funny Manglish question tailored to this face's expression",
      "options": ["Option 1 (Normal)", "Option 2 (Slightly Useless)", "Option 3 (Very Useless)", "Option 4 (Maximum Uselessness)"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    },
    {
      "level": "FACE VIBE ZONE 2",
      "title": "🍛 Another funny Manglish question based on their face vibe",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    },
    {
      "level": "FACE VIBE ZONE 3",
      "title": "📚 Question about study/work procrastination tailored to face",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    },
    {
      "level": "FACE VIBE ZONE 4",
      "title": "😴 Question about sleeping/alarm struggles",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    },
    {
      "level": "FACE VIBE ZONE 5",
      "title": "🧊 Question about food/fridge habit",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    },
    {
      "level": "FACE VIBE ZONE 6",
      "title": "🎬 Question about social media/reels addiction",
      "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
      "scores": [0, 8, 16, 25],
      "commentary": ["Reaction 1", "Reaction 2", "Reaction 3", "Reaction 4"]
    }
  ]
}`;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [
            {
              inlineData: {
                mimeType: 'image/jpeg',
                data: base64Data
              }
            },
            {
              text: promptText
            }
          ]
        }],
        generationConfig: {
          temperature: 0.95,
          maxOutputTokens: 1500
        }
      })
    });

    if (!geminiResponse.ok) {
      const errText = await geminiResponse.text();
      console.error('Gemini API Error:', errText);
      return res.status(geminiResponse.status).json({ error: 'Gemini API Error', details: errText });
    }

    const geminiData = await geminiResponse.json();
    const textResponse = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const cleanJsonStr = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(cleanJsonStr);

    return res.status(200).json(parsed);

  } catch (error) {
    console.error('Server error analyzing face:', error);
    return res.status(500).json({ error: 'Internal server error analyzing face', message: error.message });
  }
}
