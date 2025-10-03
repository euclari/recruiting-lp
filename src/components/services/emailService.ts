export interface ContactFormData {
  name: string;
  email: string;
  role: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Função para obter mensagens traduzidas
const getTranslatedMessages = (language: 'pt' | 'en' = 'pt') => {
  const messages = {
    pt: {
      success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      error: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
    },
    en: {
      success: 'Message sent successfully! We will get in touch soon.',
      error: 'Error sending message. Please try again later.'
    }
  };
  return messages[language];
};

// Função para enviar email via API
export const sendContactEmail = async (data: ContactFormData, language: 'pt' | 'en' = 'pt'): Promise<EmailResponse> => {
  const messages = getTranslatedMessages(language);
  try {
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        message: messages.error,
      };
    }

    return {
      success: true,
      message: messages.success,
    };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return {
      success: false,
      message: messages.error,
    };
  }
};

// Função para enviar via EmailJS (exemplo de integração)
export const sendEmailViaEmailJS = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // Para usar EmailJS, você precisaria:
    // 1. Instalar: npm install @emailjs/browser
    // 2. Configurar no EmailJS.com
    // 3. Usar o código abaixo:
    
    /*
    import emailjs from '@emailjs/browser';
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      role: data.role,
      message: data.message,
      to_email: 'jobs@euclari.com.br'
    };
    
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );
    
    return {
      success: true,
      message: 'Mensagem enviada com sucesso!'
    };
    */
    
    // Por enquanto, retornar sucesso simulado
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! (Simulado)'
    };
  } catch (error) {
    console.error('Erro ao enviar email via EmailJS:', error);
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
    };
  }
};

// Função para enviar via Formspree (exemplo de integração)
export const sendEmailViaFormspree = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // Para usar Formspree, você precisaria:
    // 1. Criar conta no Formspree.io
    // 2. Usar o código abaixo:
    
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        role: data.role,
        message: data.message
      })
    });
    
    if (response.ok) {
      return {
        success: true,
        message: 'Mensagem enviada com sucesso!'
      };
    } else {
      throw new Error('Erro na resposta do Formspree');
    }
    */
    
    // Por enquanto, retornar sucesso simulado
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! (Simulado)'
    };
  } catch (error) {
    console.error('Erro ao enviar email via Formspree:', error);
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
    };
  }
};
