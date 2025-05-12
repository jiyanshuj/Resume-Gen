# gemini_eval.py
import google.generativeai as genai

# Configure Gemini API
genai.configure(api_key="YOUR_GEMINI_API_KEY")

def get_ats_score_with_gemini(resume_text, job_desc_text):
    prompt = f"""
You are an ATS system. Given the following resume and job description, rate the resume's relevance to the job on a scale from 0 to 100. Suggest changes in the resume to improve its relevance.

Job Description:
{job_desc_text}

Resume:
{resume_text}

Return only the score as a number and a brief explanation of the match.
"""
    model = genai.GenerativeModel("gemini-pro")
    response = model.generate_content(prompt)
    return response.text.strip()
